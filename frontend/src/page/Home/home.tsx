import React, { useEffect, useState } from 'react';
import '../Home/home.css';
import logo from '../../image/logo.png';

/* importation des FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons'; 

// Import Google font
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
</style>

// Définition d'un type pour les données de solde bancaire
type Balance = {
    account: string;
    balance: number;
    currency: string;
};

function Home() {
    // États pour gérer les données de solde
    const [balance, setBalance] = useState<Balance | null>(null);

    // Utiliser useEffect pour récupérer le solde bancaire lors du chargement du composant
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/balance'); // Remplacer par l'URL de ton API
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données : ' + response.statusText);
                }
                const data = await response.json();
                
                // Assurer que les données correspondent au format attendu
                if (data && data.account && typeof data.balance === 'number' && data.currency) {
                    setBalance(data); // Mettre à jour l'état avec les données récupérées
                } else {
                    console.error("Format des données incorrect :", data);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données de solde :", error);
            }
        };

        fetchBalance();
    }, []); // [] signifie que cela s'exécute une seule fois lors du montage du composant

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

                {/* Corps de page */}
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

                {/* Section bancaire */}
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

                <div className='calendar_corp'></div>
                <div className='task_corp'></div>
            </div>
        </div>
    );
}

export default Home;