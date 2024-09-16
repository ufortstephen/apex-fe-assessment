import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSimplifiedError } from "../../util";
import { APIService } from "../../util/APIService";
import { url } from "../../util/endpoints";

export interface PaymentsState {
    loading: boolean;
    payments: any

}

const initialState: PaymentsState = {
    loading: false,
    payments: []
};

export const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPayments.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPayments.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getPayments.fulfilled, (state, { payload }) => {
                state.loading = false;
            })

    },
});

export const getPayments = createAsyncThunk(
    "getPayments",
    async (payload: any, { rejectWithValue }) => {
        try {
            const { data } = await APIService.get(`${url.getPayments(payload)}`);
            return data;
        } catch (error: any) {
            return rejectWithValue(
                getSimplifiedError(error.response ? error : error)
            );
        }
    }
);


export const paymentsSelector = (state: any) => state.payments;

export const {
    clearState,
} = paymentsSlice.actions;
export default paymentsSlice.reducer;
