import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Detail = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log(details);
  }, [params.name]);

  return (
    <DetailDiv>
      <div className='imgdiv'>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h2>Recipe:</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.5rem;
    line-height: 2.5 rem;
  }
  ul {
    margin-top: 2rem;
  }
  .imgdiv{
    text-align: center;
    margin-bottom: 100px;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  font-weight: 600;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Detail;
