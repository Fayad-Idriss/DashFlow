import '../Home/home.css'
import logo from '../../image/logo.png'


/* importation des FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

//Import Google font
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


function Home() {
    return (
        <div className='div_'>   
            <div className='block_1'>
                <header className='header'>
                   <div> <img className='logo' src={logo} alt="Logo du site" /> </div>
                   <div className='header_bar'>
                      <p className='header_bar_p'>Overview</p>
                      <p className='header_bar_p'>Reports</p>
                      <div className='header_bar_search'>
                        <p className='header_text'>Search Reports</p>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icone' /> 
                      </div>
                   </div>
                </header>
            </div>
            <div className='block_2'>

            </div>
        </div>
    )
}

export default Home