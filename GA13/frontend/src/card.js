import Card from 'react-bootstrap/Card';

export default function card() {
  return (
    <Card>
      <Card.Header>SUBJECT</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            SCORE
            {' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}