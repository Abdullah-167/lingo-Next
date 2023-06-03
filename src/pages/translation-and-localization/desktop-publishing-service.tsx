import DesktopPublishingService from "../../Components/DesktopPublishingService/index"
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Seo title={t("homeMetaTitle")} description={t("homeMetaDescription")} />
      <DesktopPublishingService />
    </>
  );
}
