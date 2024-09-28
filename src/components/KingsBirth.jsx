import React, { useState } from "react";
import "../styles/Game.css"

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerClass, setPlayerClass] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [showClassInfo, setShowClassInfo] = useState(false);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameLog, setGameLog] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gold, setGold] = useState(0);

  const classDescriptions = {
    Barbarian: "Barbarians are fierce warriors with high attack power but lower defense. (Attack Power + Health +)",
    Knight: "Knights are well-rounded fighters that are known to be sturdier due to their heavy armor. (Health +++)",
    Heathen: "Heathens are wild fighters, known for their more reckless approach to combat, leaving themselves more open to attacks. (Attack Power +++ Health -)"
  };

  const startGame = () => {
    if (!playerClass || !playerName) {
      alert("Please select a class and enter a name.");
      return;
    }
    setGameStarted(true);
    logMessage(`Game started! Welcome, ${playerName} the ${playerClass}.`);
  };

  const logMessage = (message) => {
    setGameLog((prevLog) => [...prevLog, message]);
  };

  const playerAttack = () => {
    if (!playerTurn) return;
    const damage = Math.floor(Math.random() * 20) + 5;
    const newEnemyHealth = Math.max(enemyHealth - damage, 0);
    setEnemyHealth(newEnemyHealth);
    logMessage(`Player attacked and dealt ${damage} damage!`);
    if (newEnemyHealth === 0) {
      logMessage("Enemy defeated!");
    } else {
      enemyAttack();
    }
  };

  const enemyAttack = () => {
    const damage = Math.floor(Math.random() * 15) + 5;
    const newPlayerHealth = Math.max(playerHealth - damage, 0);
    setPlayerHealth(newPlayerHealth);
    logMessage(`Enemy attacked and dealt ${damage} damage!`);
    if (newPlayerHealth === 0) {
      logMessage("Game over! You died.");
    }
    setPlayerTurn(true);
  };

  return (
    <div className="game-container">
      <div id="game-name">
        <h3>King's Birth</h3>
      </div>

      {!gameStarted && (
        <div className="class-container">
          <div id="class-selection">
            <h2>Character Creation</h2>
            <select
              className="character-inputs"
              onChange={(e) => setPlayerClass(e.target.value)}
              value={playerClass}
            >
              <option value="">Select a class</option>
              <option value="Barbarian">Barbarian</option>
              <option value="Knight">Knight</option>
              <option value="Heathen">Heathen</option>
            </select>
            <input
              className="character-inputs"
              type="text"
              placeholder="Enter a name."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button onClick={() => setShowClassInfo(!showClassInfo)}>
              {showClassInfo ? "Hide Class Info" : "Show Class Info"}
            </button>
            {showClassInfo && (
              <div id="class-info">
                <p><strong>Barbarian:</strong> {classDescriptions.Barbarian}</p>
                <p><strong>Knight:</strong> {classDescriptions.Knight}</p>
                <p><strong>Heathen:</strong> {classDescriptions.Heathen}</p>
              </div>
            )}
            <button onClick={startGame}>Start Game</button>
          </div>
        </div>
      )}

      {gameStarted && (
        <div id="game-area">
          <div className="character" id="player-character">
            <h2>{playerName}</h2>
            <div className="health-bar">
              <div className="health-bar-inner" style={{ width: `${(playerHealth / 100) * 100}%` }}></div>
            </div>
            <div className="player-stats">
              <p>Class: {playerClass}</p>
              <p>Health: {playerHealth}</p>
              <p>Gold: {gold}</p>
            </div>
            <div className="buttons-container">
              <button onClick={playerAttack} disabled={!playerTurn}>Attack</button>
              <button disabled={!playerTurn}>Block</button>
              <button disabled={!playerTurn}>Cast Spell</button>
              <button disabled={!playerTurn}>Use Potion</button>
            </div>
          </div>

          <div className="character" id="enemy-character">
            <h2>Enemy</h2>
            <div className="health-bar">
              <div className="health-bar-inner" style={{ width: `${(enemyHealth / 100) * 100}%` }}></div>
            </div>
            <p>Health: {enemyHealth}</p>
          </div>

          <div className="log-container">
            <p>~~~King's Log~~~</p>
            <div id="log">
              {gameLog.map((log, index) => (
                <p key={index}>{log}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
