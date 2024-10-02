import React, { useEffect, useState } from 'react';
import '../Home/home.css';
import logo from '../../image/logo.png';
import Calendar from '../../component/calendar/calendar'; 
import TaskLine from '../../component/taskLine/TaskLine';

/* importation des FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons'; 

// Définition d'un type pour les données de solde bancaire
type Balance = {
    account: string;
    balance: number;
    currency: string;
};

function Home() {
    const [balance, setBalance] = useState<Balance | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/balance'); 
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données : ' + response.statusText);
                }
                const data = await response.json();
                if (data && data.account && typeof data.balance === 'number' && data.currency) {
                    setBalance(data);
                } else {
                    console.error("Format des données incorrect :", data);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données de solde :", error);
            }
        };
        fetchBalance();
    }, []); 

    return (
        <div className='div_'>   
            <div className='block_1'>
                <header className='header'>
                    <div>
                        <img className='logo' src={logo} alt="Logo du site" />
                    </div>
                    <div className='header_bar'>
                        <p className='header_bar_p'>Overview</p>
                        <p className='header_bar_p'>Reports</p>
                        <div className='header_bar_search'>
                            <p className='header_text'>Search Reports</p>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icone' /> 
                        </div>
                    </div>
                </header>

                <div className='corp'>
                    <div className='corp_div'>
                        <div className='corp_div_text'>
                            <h3 className='corp_div_p'> Hi M. BACARI ! </h3>
                            <p className='corp_div_p'> Welcome back M. BACARI You have a lot of work </p>
                            <p className='corp_div_p'> Your Score </p>
                        </div>
                    </div>
                </div>   

                <h2 className='title'> Dashboard </h2>   

                <div className='corp_list'>
                    <p className='corp_div_p'> Booking </p>
                    <p className='corp_div_p'> Amenities </p>
                    <p className='corp_div_p'> Tasks </p>
                    <p className='corp_div_p'> Locality </p>
                </div> 

                <div className='corp_div_bancaire'> 
                    <div className='div_bancaire'>
                        <h1 className='titre_info_bancaire'>Bank Account</h1>
                        {balance ? (
                            <>
                               <p className='chiffre'>{balance.balance} {balance.currency}</p>
                            </>
                        ) : (
                            <p>Chargement des données...</p>
                        )}
                    </div>

                    <div>
                        <h2 className='corp_div_p'>HISTORIQUE</h2>
                        <p className='corp_div_p'> - 100euro Carrefour</p>
                        <p className='corp_div_p'> - 15euro FiveCenter </p>
                        <p className='corp_div_p'> - 45euro On Air Training gym</p>
                        <p className='corp_div_p'> - 600 Lyon Est Habitat </p>
                    </div>
                </div>

                <div className='corp_div_cart'>
                    <div className='cart'></div>
                    <div className='cart'></div>
                    <div className='cart'></div>
                    <div className='cart'></div>
                </div>      
            </div>

            <div className='block_2'>
                <div className='header_2'> 
                    <FontAwesomeIcon icon={faBell} className='cloche'/>
                    <FontAwesomeIcon icon={faCalendar} className='calendar' />
                    <div className='header_2_search'>
                        <div className='name'> Fayad-Idriss BACARI </div>
                        <div className='picture'></div>
                    </div>
                </div>

                {/* Insertion du calendrier ici */}
                <div className='calendar_corp'>
                    <Calendar /> {/* Composant calendrier */}
                </div>
                
                <div className='task_corp'>
                    <TaskLine /> {/* Insertion du composant TaskLine */}
                </div>
            </div>
        </div>
    );
}

export default Home;