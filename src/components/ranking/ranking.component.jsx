import './ranking.styles.scss';

const Ranking = ({user}) => {
    const {name, entries} = user;

    const userName = name.charAt(0).toUpperCase() + name.slice(1);

    return(
        <div className='ranking'>
            <span>{`${userName}, Your current rank is`}</span> <br/>
            <span className='number'>{'#'+ entries}</span>
        </div>
    )
};

export default Ranking;