import styled from 'styled-components';

export const SpanPink = styled.span`
  color: #f55263;
  margin-bottom: 20px;
  display: block;
`;

export const SpanWhite = styled.span`
  color: white;
  margin-bottom: 10px;
  font-size: 16px;
  text-transform: uppercase;
  display: block;
`;

export const CenteredWrapper = styled.div`
  max-width: 1200px;
  box-sizing: content-box;
  margin-right: auto;
  margin-left: auto;
`;

export const Div = styled.div`
  background-color: #302626;
  padding: 15px 60px 15px 60px;
`;

export const Footer = styled(CenteredWrapper)`
  background-color: #414141;
  height: 20px;
  padding: 15px 60px 15px 60px;
  flex: 0 0 auto;
  width: 100%;
  max-width: 1080px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const EmptyResult = styled.div`
  color: #c8c8c8;
  font-size: 60px;
  text-align: center;
  vertical-align: middle;
  height: calc(100vh - 300px);
  line-height: calc(100vh - 500px);
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ResultsItemWrapper = styled.div`
  width: 267px;
  padding: 10px 20px;
`;

export const ResultsItemDescription = styled(Flex)`
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const Box = styled.span`
  border: 1px solid #b6b6b6;
  border-radius: 2px;
  color: #555555;
  padding: 1px 8px;
  font-weight: bold;
  font-size: 14px;
`;

export const Title = styled.div`
  color: #434343;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Genres = styled.div`
  color: #959595;
`;

export const A = styled.a`
  text-decoration: none;
`;
