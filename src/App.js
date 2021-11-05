import { ColoredButton, ConnectButton } from "./components/Button";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "./connectors";
//js 파일 안에 export할 component가 하나라면 중괄호 쓰지 말기
import CountGet from "./components/CounterGet";
import CounterInc from "./components/CounterInc";
import CounterDec from "./components/CounterDec";
import styled from 'styled-components';

function App() {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  const AcctInfo = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: navy;
  backgroud: white;
  `;
 
  const Funt = styled.button`
  border-radius: 0.25rem;
  font-size: 2rem;
  border: 1px solid lightgray;
  color: red;
  backgroud: white;
  `;

  return (
    <div>
      <AcctInfo>
        <div>Chain Id : {chainId}</div>
      </AcctInfo>

      <AcctInfo>
      <div>Account : {account}</div>
      </AcctInfo>

      { active ? (
        <div style={{color:"green"}}>Connected!</div>
      ) : (
        <Funt><button onClick={onClick}>Connect</button></Funt>
      ) }

      <div>
      <Funt getCount>
        <CountGet />
      </Funt>
      <Funt>
        <CounterInc />
      </Funt>
      <Funt>
        <CounterDec />
      </Funt>
      </div>
    </div>
  );
}

export default App;
