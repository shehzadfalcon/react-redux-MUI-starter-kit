import { Action, createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const selectToken = (state) => state.auth.token;