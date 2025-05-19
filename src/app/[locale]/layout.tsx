import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
