import { Html } from "@react-three/drei";

const  WelcomeMessage = ({ onRestore, mensaje }) => {
  return (
    <Html center position={[0, 7, 0]}>
      <div style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '20px',
          borderRadius: '15px',
          color: '#2c3e50',
          width: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)'
      }}>
        <h2 style={{
            margin: '0 0 15px 0',
            color: '#3498db',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>¡Bienvenido!</h2>
        <p style={{
            marginBottom: '15px',
            lineHeight: '1.5'
          }}>
            {mensaje}
          </p>
        <button 
          onClick={onRestore}
          style={{
            marginTop: '15px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Volver
        </button>
      </div>
    </Html>
  );
}

export default WelcomeMessage;