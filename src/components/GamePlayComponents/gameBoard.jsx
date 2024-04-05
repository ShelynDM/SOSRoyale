import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SMarker from '../../assets/GamePlayAssets/s.png';
import OMarker from '../../assets/GamePlayAssets/o.png';

export default function GameBoard() {
  const nav = useNavigation();
  const [player1, setPlayer1] = React.useState(0); //Player1 Score
  const [player2, setPlayer2] = React.useState(0); //Player2 Score
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);
  const [letter, setLetter] = React.useState('');
  const [board, setBoard] = React.useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  // identifies which row or column where SOS is formed
  const [h1, setH1] = React.useState(0);
  const [h2, setH2] = React.useState(0);
  const [h3, setH3] = React.useState(0);
  const [v1, setV1] = React.useState(0);
  const [v2, setV2] = React.useState(0);
  const [v3, setV3] = React.useState(0);
  const [d1, setD1] = React.useState(0);
  const [d2, setD2] = React.useState(0);

  // Handle the selection of the letter
  const handleLetterSelection = selectedLetter => {
    if (!gameOver) {
      setLetter(selectedLetter);
    }
  };

  // Handle the press event on the grid
  const handlePress = (i, j) => {
    // If the cell is empty, update the board
    if (board[i][j] === '') {
      let newBoard = [...board];
      newBoard[i][j] = letter;
      setBoard(newBoard);
      // Check if the player has formed SOS
      checkSOS();
    }

    // If the cell is empty, alert the player to pick a letter
    if (board[i][j] === '') {
      if (letter === '') {
        setCurrentPlayer(1);
        return;
      }
    }
  };

  // Initialization to check the SOS count on the board
  let sosCount = 0;
  // Check if the player has formed SOS
  const checkSOS = () => {
    // Helper function to check for SOS and update state accordingly
    const checkAndUpdate = (condition, setter) => {
      if (condition) {
        sosCount++;
        updateScore();
        setter(1);
      }
    };

    // Checking for vertical columns
    checkAndUpdate(
      board[0][0] === 'S' &&
        board[0][1] === 'O' &&
        board[0][2] === 'S' &&
        v1 === 0,
      setV1,
    );
    checkAndUpdate(
      board[1][0] === 'S' &&
        board[1][1] === 'O' &&
        board[1][2] === 'S' &&
        v2 === 0,
      setV2,
    );
    checkAndUpdate(
      board[2][0] === 'S' &&
        board[2][1] === 'O' &&
        board[2][2] === 'S' &&
        v3 === 0,
      setV3,
    );

    // Checking for horizontal rows
    checkAndUpdate(
      board[0][0] === 'S' &&
        board[1][0] === 'O' &&
        board[2][0] === 'S' &&
        h1 === 0,
      setH1,
    );
    checkAndUpdate(
      board[0][1] === 'S' &&
        board[1][1] === 'O' &&
        board[2][1] === 'S' &&
        h2 === 0,
      setH2,
    );
    checkAndUpdate(
      board[0][2] === 'S' &&
        board[1][2] === 'O' &&
        board[2][2] === 'S' &&
        h3 === 0,
      setH3,
    );

    // Checking for diagonals
    checkAndUpdate(
      board[0][0] === 'S' &&
        board[1][1] === 'O' &&
        board[2][2] === 'S' &&
        d1 === 0,
      setD1,
    );
    checkAndUpdate(
      board[2][0] === 'S' &&
        board[1][1] === 'O' &&
        board[0][2] === 'S' &&
        d2 === 0,
      setD2,
    );

    if (sosCount === 0) {
      // Set the current player to the other player
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  // Update the score of the player who formed the SOS
  const updateScore = () => {
    console.log('Update score SOS Count', sosCount);

    if (currentPlayer === 1) {
      setPlayer1(prevPlayer1 => prevPlayer1 + 1);
    } else {
      setPlayer2(prevPlayer2 => prevPlayer2 + 1);
    }
  };

  // Determine the winner of the game
  const determineWinner = () => {
    if (gameOver) {
      if (player1 > player2) {
        setCurrentPlayer(1);
      } else if (player2 > player1) {
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(null);
      }
      setH1(0);
      setH2(0);
      setH3(0);
      setV1(0);
      setV2(0);
      setV3(0);
      setD1(0);
      setD2(0);
    }
  };

  // Check if the game is over and display the winner
  const handleGameOver = () => {
    if (
      board[0].every(cell => cell !== '') &&
      board[1].every(cell => cell !== '') &&
      board[2].every(cell => cell !== '')
    ) {
      checkSOS();
      setGameOver(true);
      determineWinner();
    }
  };

  // Reset the game
  const handleReset = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setCurrentPlayer(1);
    setGameOver(false);
    setLetter('');
    setPlayer1(0);
    setPlayer2(0);
    setH1(0);
    setH2(0);
    setH3(0);
    setV1(0);
    setV2(0);
    setV3(0);
    setD1(0);
    setD2(0);
  };

  // Every time the board changes, the function inside the useEffect will run
  React.useEffect(() => {
    handleGameOver();
  }, [board, gameOver]);

  return (
    <View>
      {/* Buttons for letter selection S and O. */}
      <View>
        <Pressable
          style={styles.SButton}
          title="S"
          onPress={() => handleLetterSelection('S')}>
          {letter === 'S' ? (
            <Image
              source={require('../../assets/GamePlayAssets/S-icon.png')}
              style={{
                width: 55,
                height: 70,
                backgroundColor: '#D6905D',
                borderRadius: 20,
                padding: 5,
                borderColor: '#D6905D',
                borderWidth: 2,
              }}
            />
          ) : (
            <Image source={require('../../assets/GamePlayAssets/S-icon.png')} />
          )}
        </Pressable>
        <Pressable
          style={styles.OButton}
          title="O"
          onPress={() => handleLetterSelection('O')}>
          {letter === 'O' ? (
            <Image
              source={require('../../assets/GamePlayAssets/O-icon.png')}
              style={{
                width: 65,
                height: 70,
                backgroundColor: '#D6905D',
                borderRadius: 25,
                padding: 5,
                borderColor: '#D6905D',
                borderWidth: 2,
              }}
            />
          ) : (
            <Image source={require('../../assets/GamePlayAssets/O-icon.png')} />
          )}
        </Pressable>
      </View>

      {/* Game board */}
      <ImageBackground
        source={require('../../assets/GamePlayAssets/3x3Board.png')}
        style={styles.backgroundImage}>
        <View style={styles.mainGrid}>
          {board.map((row, i) => (
            <View key={i}>
              {row.map((cell, j) => (
                <Pressable
                  key={j}
                  style={styles.grid}
                  onPress={() => handlePress(i, j)}>
                  {cell === 'S' ? (
                    <Image source={SMarker} style={styles.marker} />
                  ) : cell === 'O' ? (
                    <Image source={OMarker} style={styles.marker} />
                  ) : null}
                </Pressable>
              ))}
            </View>
          ))}
        </View>

        {/* Alert for Pop Up */}
        <Pressable>
          {letter === '' ? (
            <Image
              source={require('../../assets/GamePlayAssets/letterAlert.png')}
              style={{position: 'absolute', top: -300, right: -195}}
            />
          ) : null}
        </Pressable>

        {/* Winner Alert PopUp */}
        <View>
          {gameOver ? (
            <ImageBackground
              source={require('../../assets/AlertAssets/AlertBoard.png')}
              style={{width: '100%', height: '100%', right: 170}}>
              {player2 === player1 ? (
                <Image
                  source={require('../../assets/AlertAssets/DrawText.png')}
                  style={{position: 'absolute', top: 70, left: 125}}
                />
              ) : player1 > player2 ? (
                <Image
                  source={require('../../assets/AlertAssets/Player1Text.png')}
                  style={{position: 'absolute', top: 50, left: 60}}
                />
              ) : (
                <Image
                  source={require('../../assets/AlertAssets/Player2Text.png')}
                  style={{position: 'absolute', top: 50, left: 60}}
                />
              )}
              <Pressable onPress={handleReset}>
                <Image
                  source={require('../../assets/AlertAssets/PlayAgainButton.png')}
                  style={{position: 'absolute', top: 150, left: 45}}
                />
              </Pressable>
              <Pressable onPress={() => nav.navigate('Home')}>
                <Image
                  source={require('../../assets/AlertAssets/ExitButton.png')}
                  style={{position: 'absolute', top: 250, left: 45}}
                />
              </Pressable>
            </ImageBackground>
          ) : null}
        </View>

        {/* Line markers for SOS */}
        <View>
          {h1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/horizontal.png')}
              style={styles.h1Marker}
            />
          ) : null}
          {h2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/horizontal.png')}
              style={styles.h2Marker}
            />
          ) : null}
          {h3 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/horizontal.png')}
              style={styles.h3Marker}
            />
          ) : null}
          {v1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/vertical.png')}
              style={styles.v1Marker}
            />
          ) : null}
          {v2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/vertical.png')}
              style={styles.v2Marker}
            />
          ) : null}
          {v3 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/vertical.png')}
              style={styles.v3Marker}
            />
          ) : null}
          {d1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/horizontal.png')}
              style={styles.d1Marker}
            />
          ) : null}
          {d2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/horizontal.png')}
              style={styles.d2Marker}
            />
          ) : null}
        </View>

        {/* Reset button */}
        <View style={styles.resetControls}>
          <Pressable onPress={handleReset}>
            {gameOver ? null : (
              <Image
                source={require('../../assets/GamePlayAssets/ResetButton.png')}
              />
            )}
          </Pressable>
        </View>

        {/* Score and player icons */}
        <View style={styles.score}>
          <View>
            <Text style={styles.scoreText}>{player1}</Text>
          </View>
          <View>
            <Text style={styles.scoreText}>{player2}</Text>
          </View>
        </View>
        <View>
          {currentPlayer === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/Player1Icon.png')}
              style={[styles.player1, {width: 120, height: 150}]}
            />
          ) : (
            <Image
              source={require('../../assets/GamePlayAssets/Player1Icon.png')}
              style={styles.player1}
            />
          )}
          {currentPlayer === 2 ? (
            <Image
              source={require('../../assets/GamePlayAssets/Player2Icon.png')}
              style={[styles.player2, {width: 100, height: 150}]}
            />
          ) : (
            <Image
              source={require('../../assets/GamePlayAssets/Player2Icon.png')}
              style={styles.player2}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  h1Marker: {
    position: 'absolute',
    bottom: 280,
    right: -160,
  },
  h2Marker: {
    position: 'absolute',
    bottom: 195,
    right: -160,
  },
  h3Marker: {
    position: 'absolute',
    bottom: 105,
    right: -160,
  },
  v1Marker: {
    position: 'absolute',
    bottom: 40,
    right: 80,
  },
  v2Marker: {
    position: 'absolute',
    bottom: 40,
    right: -5,
  },
  v3Marker: {
    position: 'absolute',
    bottom: 40,
    right: -90,
  },
  d1Marker: {
    position: 'absolute',
    bottom: 190,
    right: -160,
    transform: [{rotate: '-135deg'}],
  },

  d2Marker: {
    position: 'absolute',
    bottom: 190,
    right: -160,
    transform: [{rotate: '135deg'}],
  },
  SButton: {
    position: 'absolute',
    bottom: 210,
    right: 60,
  },
  OButton: {
    position: 'absolute',
    bottom: 210,
    left: 70,
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  score: {
    position: 'absolute',
    bottom: -82,
    width: '100%',
    flexDirection: 'row',
    left: 90,
    gap: 120,
    textAlign: 'center',
  },
  playerText: {
    position: 'absolute',
    bottom: -130,
    width: '100%',
    flexDirection: 'row',
    left: 65,
    gap: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  player1: {
    position: 'absolute',
    bottom: -115,
    right: 95,
  },
  player2: {
    position: 'absolute',
    bottom: -110,
    right: -180,
  },
  resetControls: {
    position: 'absolute',
    top: 25,
    left: 235,
    width: '100%',
  },
  marker: {
    width: 40,
    height: 40,
  },

  backgroundImage: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
    width: 340,
    height: 400,
  },
  mainGrid: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 250,
    height: 250,
    top: 68,
    left: -8,
  },
  grid: {
    width: 80,
    height: 80,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
