// import { AuthApi } from "@/utils/fetch";
// import { FetchResponse } from "@/utils/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLogedinUser = createAsyncThunk(
  "user/getLogedinUser",
  async (id: any, { getState }: any) => {
    const useId = getState().user.logginData.id;
    console.log(useId);

    if (!useId) return;
    // const res: FetchResponse = await AuthApi.get(`/user/${useId}`);
    // return res.data;
  }
);
