import { Card, CardContent } from '@mui/material';
import './hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className='hero-title'>Tour del <span className="condor">Condor</span></h1>
      <div className="hero-card">
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "10px",
              border: "none",
              borderRadius: "15px",
              backdropFilter: "blur(7px)",
              background: "rgba(230, 230, 230, 0.5)",
              boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.5)",
              width: "75%",
              maxWidth: "400px",
              alignSelf: "right",
              justifySelf: "end"
            }}
          >
            <CardContent>
              <h3 className='hero-card-text'>Desafía tus límites. Vive el tour que todos quieren conquistar.</h3>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}

export default Hero;