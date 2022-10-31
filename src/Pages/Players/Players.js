import React from 'react';
import './Players.css'
import { useParams } from "react-router-dom";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function Players() {
    return (
        <div className="players">
            <h2>No players found </h2>
        </div>
    )
}
const WrappedPlayers = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Players params={params} />
    </ErrorBoundary>
  );}

export default WrappedPlayers;
