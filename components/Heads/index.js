import Head from "next/head";
import ICON from '../../public/icon.png';

const Heads = ({ title, keyword, descriptions }) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="description" content={descriptions} />
            <meta name="keywords" content={keyword} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Shop -{title}</title>
            <link rel="shortcut icon" href={ICON.src} type="image/png" />
        </Head>
    )
}

export default Heads;