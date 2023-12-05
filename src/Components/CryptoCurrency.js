import './CryptoCurrency.css';

import { useEffect, useState } from 'react';

const CryptoCurrency = ()=> {

    useEffect(()=>{
        getCryptoCurrencyData();
    }, [])

    const [currencyList, setCurrencyList] = useState([])
    const getCryptoCurrencyData = async ()=> {
        try{
            const options = {
                method: "GET"
            }
            const response = await fetch("https://apis.ccbp.in/crypto-currency-converter", options);
            const data = await response.json();
            //console.log(data)
            setCurrencyList(data)
        }
        catch(error){
            console.log("Data fetching error is : ", error);
        }
    }
    console.log(currencyList)

    return(
        <div className='d-flex flex-column align-items-center mt-5'>
            <div className='crypto-currency-container'>
                <h2 className='currency-heading'>Cryptocurrency Tracker</h2>
                <div>
                    <img className='currency-image'
                        src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt='cryptocurrency'>

                    </img>
                </div>

                <table className='table table-bordered'>
                    <thead className='table-header'>
                        <tr>
                            <th>Coin Type</th>
                            <th>USD</th>
                            <th>EURO</th>
                        </tr>
                    </thead>
                    <tbody className='body-bg'>
                            {
                               currencyList.map((eachCoin) => (
                                <tr>
                                    <td>
                                        <div className='d-flex'>
                                            <img src={eachCoin.currency_logo} className='currency-logo'></img>
                                            <p>{eachCoin.currency_name}</p>
                                        </div>
                                    </td>
                                    <td>{eachCoin.usd_value}</td>
                                    <td>{eachCoin.euro_value}</td>
                                </tr>
                               )) 
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CryptoCurrency;