const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '12px 0',
}

function Card({ children }) {
  return <div style={cardStyle}>{children}</div>
}

export default Card
