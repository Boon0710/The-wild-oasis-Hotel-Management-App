/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 180vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // Load the authenticated user
  const { isAuthenticated, isPending, fetchStatus } = useUser();

  //If there is no authenticated user, redirect to the /login
  useEffect(function(){
    if(!isAuthenticated && !isPending && fetchStatus !== "fetching") navigate('/login')
}, [isAuthenticated, navigate, isPending, fetchStatus])
  //while loading show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  
  //if there is a user render the app
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
