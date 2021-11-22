import App from "next/app";
import Layout from "../components/_App/Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import '../styles/bootstrap-rtl.css';
// import '../styles/bootstrap5-rtl.css';
import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/styles-video.css';
import '../styles/styles-course.css';
import '../styles/styles-clinic.css';
import '../styles/modal.css';
import '../styles/styles-products.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }


  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
