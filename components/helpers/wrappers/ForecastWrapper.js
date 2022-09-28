const ForecastWrapper = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: '', gap: '0.5rem', textAlign: 'center', width: '100%', fontSize: '0.8rem'}}>
            {children}
        </div>
    );
}

export default ForecastWrapper;