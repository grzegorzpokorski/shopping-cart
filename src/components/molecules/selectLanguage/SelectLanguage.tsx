import { useTranslation } from "react-i18next";
import { Languages } from "../../../../i18next.config";
import { SelectInput } from "../../atoms/selectInput/SelectInput";
import { useSelectLanguage } from "./useSelectLanguage";

export const SelectLanguage = () => {
  const { t } = useTranslation();
  const { selectedLang, handleChangeLanguage } = useSelectLanguage();

  return (
    <SelectInput
      label={t("select.language")}
      currentValue={selectedLang}
      name="language"
      onChange={(e) => handleChangeLanguage(e.target.value)}
      options={Array<{ label: string; value: Languages }>(
        {
          label: "polski",
          value: "pl",
        },
        {
          label: "english",
          value: "en",
        },
      )}
    />
  );
};
