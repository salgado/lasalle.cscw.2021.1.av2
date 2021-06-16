import { Row, Card, Badge, Input } from 'antd';
import { useState } from 'react'
import 'antd/dist/antd.css';
import { ModalNewData } from './ModalNewData'
import './App.css'

export const Status = {
  VAZIO: {
    label: "Vazio",
    badge: "success"
  },
  CHEIO: {
    label: "Cheio",
    badge: "error"
  }
}

const Types = {
  POSTO: "posto",
  HOSPITAL: "hospital",
  CENTRO: "centro",
}

let defaultData = [
  {
    img: "http://culturaniteroi.com.br/blog/imagens/488_capa.jpg",
    name: "campo de sao bento",
    type: Types.POSTO,
    status: Status.VAZIO,
    time: "1h",
    props: ["vacinacao", "Nao tem atendimento para covid"]
  },
  {
    img: "https://www.radiodivinopolis.com.br/assets/uploads/imagens/thumbs/070a2-img_1327.jpg",
    name: "Saúde de Niterói",
    type: Types.CENTRO,
    status: Status.CHEIO,
    time: "2h",
    props: ["vacinacao", "Nao tem atendimento para covid"]
  },
  {
    img: "https://www.saudebusiness.com/sites/saudebusiness.com/files/styles/article_featured_retina/public/uploads/2020/06/hospital-icarai%CC%81-480x335.jpg?itok=4nq3_uQO",
    name: "Icaraí",
    type: Types.HOSPITAL,
    status: Status.VAZIO,
    time: "1h 30m",
    props: ["vacinacao", "Atendimento para covid"]
  },
  {
    img: "https://1.bp.blogspot.com/-fv5v0xIM_KE/XREbTlw9LEI/AAAAAAADLV8/kpNvYSgfpp0Xs_xLlTnNZxCU1XcuZLBCQCLcBGAs/s1600/IMG_4068.jpg",
    name: "Fonseca",
    type: Types.HOSPITAL,
    status: Status.CHEIO,
    time: "30m",
    props: ["vacinacao", "Atendimento para covid"]
  },
  {
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQE3AKwHdiQ4Bg/company-logo_200_200/0/1519871443501?e=1631750400&v=beta&t=pLkdxvRq-SfvfbxrN0lUug7f8cf2e_Lh369Y4wDo5BM",
    name: "Niterói D'or",
    type: Types.HOSPITAL,
    status: Status.CHEIO,
    time: "3h",
    props: ["Atendimento para covid"]
  },

]



function App() {
  const [data, setData] = useState(defaultData);
  const [result, setResult] = useState(defaultData);

  const handleSearch = ({ target: { value } }) => {
    setResult(data?.filter(({ name }) => {
      return name.toLowerCase().indexOf(value.toLowerCase()) > -1
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Unilasalle - 2021.1 - CSCW-AV2 - Yago Batista da Silva - Matrícula 0050017826</h1>
        <h2> O melhor posto</h2>
        <p>
          O objetivo do trabalho é criar uma aplicação de crowdsourcing em que os usuários compartilhem e consultem informações em tempo real sobre a covid-19, como por exemplos postos que estão realizando atendimento ou vacinação, como o posto/hospital estava na sua última consulta, tempo médio de consulta e etc.
        </p>
      </header>
      <main>
        <>
          <Input
            placeHolder="Busca"
            onChange={handleSearch}
            style={{ width: "50%", margin: 10 }} />
          <ModalNewData data={data} setData={setData}></ModalNewData>
          <Row>
            {result?.map(({ img, type, name, time, props, status: { label, badge } }) => (
              <Card
                title={`${type} - ${name}`}
                extra={<Badge status={badge} text={label} />}
                style={{ width: 300, margin: 10 }}
              >
                <img src={img} alt="blaba" />
                <span>tempos médio: {time}</span>
                <ul>
                  {props?.map(item => <li>{item}</li>)}
                </ul>
              </Card>
            )
            )}

          </Row>
        </>
      </main>
    </div>
  );
}

export default App;
