import styled from 'styled-components';
const StyledPost = styled.section`
  padding: 0.8rem 1.2rem;
  box-shadow: inset 0px 8px 6px -6px #888;

  .article-header {
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgrey;
  }

  .article-section {
    position: relative;
  }

  .author {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1rem;
    }
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

  button.icon {
    position: absolute;
    border: none;
    height: 50px;
    width: 50px;
    padding: 0;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;

    img {
      filter: drop-shadow(0 3px 5px);
    }
  }

  button.icon:hover {
    scale: 1.05;
    opacity: 90%;
  }

  button.down {
    top: 1rem;
    right: 0;
    height: 50px;
    width: 50px;
  }

  button.up {
    top: 1rem;
    right: 0;
  }

  .comments-section {
    position: relative;
    border-top: 1px solid lightgray;
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .textbox {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      min-height: 110px;
      resize: none;
      field-sizing: content;
    }

    .post-btn {
      width: 100%;
      border: 2px solid gray;
      border-radius: 40px;
      background: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
  }

  article {
    font-family: 'Domine', Times, serif;
  }
`;

export default StyledPost;
