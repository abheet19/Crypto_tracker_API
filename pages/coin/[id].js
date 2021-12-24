import Layout from '../../components/Layout';
import styles from './Coin.module.css';

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name.toUpperCase()}</h1>
          <p className={styles.coin_ticker}>{coin.symbol.toUpperCase()}</p>
          <p className={styles.coin_current}>
            {'Current Price:  '+`${coin.market_data.current_price.usd} $`}
          </p>
          <p className={styles.coin_current}> {'Market Cap:  ' + `${coin.market_data.market_cap.usd} $`}</p>
          <p className={styles.coin_current}></p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}