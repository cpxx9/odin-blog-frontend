import styled from 'styled-components';
const StyledPost = styled.section`
  padding: 0.8rem 1.2rem;

  .article-section {
    position: relative;
  }

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    font-size: 2rem;
  }

  button {
    position: absolute;
    border: none;
    height: 40px;
    width: 40px;
    padding: 0;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;

    img {
      filter: drop-shadow(0 0 4px #969696);
    }
  }

  button.down {
    top: 0;
    right: 0;
    height: 50px;
    width: 50px;
  }

  button.up {
    top: 0;
    right: 0;
  }

  .comments-section {
    position: relative;
  }

  #comment {
    resize: none;
    overflow: scroll;
  }

  article {
    font-family: 'Times New Roman', Times, serif;
  }
`;

export default StyledPost;
