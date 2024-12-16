import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DriverNameState {
  driverName: string;
  QuantityOfDrivers: number;
  draftInsuranceId: number | null;
}

const initialState: DriverNameState = {
  driverName: " ",
  QuantityOfDrivers: 0,
  draftInsuranceId: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDriverName(state, action: PayloadAction<string>) {
      state.driverName = action.payload;
    },
    setQuantityOfDrivers(state, action: PayloadAction<number>) {
      state.QuantityOfDrivers = action.payload;
    },
    setDraftInsuranceId(state, action: PayloadAction<number | null>) {
      state.draftInsuranceId = action.payload;
    },
    resetDataState(state) {
      state.driverName = " "; // Сбрасываем минимальную цену // Сбрасываем максимальную цену
      state.QuantityOfDrivers = 0; // Сбрасываем количество дата-центров
      state.draftInsuranceId = null; // Сбрасываем ID черновика заказа
    },
  },
});

export const {
  setDriverName,
  setQuantityOfDrivers,
  setDraftInsuranceId,
  resetDataState,
} = dataSlice.actions;

export default dataSlice.reducer;
