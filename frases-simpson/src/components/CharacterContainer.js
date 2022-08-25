import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer({ characters }) {
  return (
    <ContainerCharacter>
      {characters.map((characterData, index) => (
        <Character characterData={characterData} key={index} />
      ))}
    </ContainerCharacter>
  );
}

const ContainerCharacter = styled.div`
  display: flex;
`;
