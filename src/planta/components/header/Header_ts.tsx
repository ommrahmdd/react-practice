import React, { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Header_ts() {
  let [lang, setLang] = useState("en");
  let { t, i18n } = useTranslation();
  let handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return {
    handleChangeLang,
    t,
    i18n,
  };
}
