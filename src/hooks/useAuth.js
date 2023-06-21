import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../store/selectors/index";

export default function useAuth() {
  const token = useSelector(selectToken);
  return token;
}
