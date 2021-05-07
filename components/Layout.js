import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Crypto" }) => {
  return (
    <div className="layout">
      <Head>
        <title>Crypto</title>
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <h1 style={{ margin: 20 }}>Crypto</h1>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
