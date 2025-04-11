import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const numbers = [1, 2, 3, 4];
  const navigate = useNavigate();

  const handleNavigate = (number) => {
    navigate(`/list-item/${number}`);
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      {numbers.map((number) => (
        <p onClick={() => handleNavigate(number)}>{number}</p>
      ))}
    </div>
  );
};
