import squartle from '../squartle.png';

const Home = () => {
    return(
        <div className='container text-center'>
        <h2 className='my-3'>Bienvenido maestro pokemón</h2>
         <div>
         <img src={squartle} width="400" alt='logo pokemon'></img>
        </div>
        </div>
        )
}
export default Home;