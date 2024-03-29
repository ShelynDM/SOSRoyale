import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import SMarker from '../../assets/GamePlayAssets/s.png';
import OMarker from '../../assets/GamePlayAssets/o.png';

export default function GameBoard() {
  const [player1, setPlayer1] = React.useState(0);
  const [player2, setPlayer2] = React.useState(0);
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

  // let h1 = 0;
  // let h2 = 0;
  // let h3 = 0;
  // let v1 = 0;
  // let v2 = 0;
  // let v3 = 0;
  // let d1 = 0;
  // let d2 = 0;

  // Check if the player has formed SOS
  const checkSOS = () => {
    //let sosCount = 0;

    // Checking for first vertical column SOS
    if (board[0][0] === 'S' && board[0][1] === 'O' && board[0][2] === 'S') {
      //sosCount++;
      // If SOS is formed in the first column and it is the first time, update the score
      // if (sosCount > 0 && v1 === 0) {
      if (v1 === 0) {
        updateScore();
        setV1(1); // set the value of v1 to 1 to indicate that SOS is formed in the first vertical column so that the score is not updated again
      }
    }
    // Checking for second vertical column SOS
    if (board[1][0] === 'S' && board[1][1] === 'O' && board[1][2] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && v2 === 0) {
      if (v2 === 0) {
        updateScore();
        setV2(1);
      }
    }

    // Checking for third vertical column SOS
    if (board[2][0] === 'S' && board[2][1] === 'O' && board[2][2] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && v3 === 0) {
      if (v3 === 0) {
        updateScore();
        setV3(1);
      }
    }

    // Check for first horizontal row SOS
    if (board[0][0] === 'S' && board[1][0] === 'O' && board[2][0] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && h1 === 0) {
      if (h1 === 0) {
        updateScore();
        setH1(1);
      }
    }

    // Check for second horizontal row SOS
    if (board[0][1] === 'S' && board[1][1] === 'O' && board[2][1] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && h2 === 0) {
      if (h2 === 0) {
        updateScore();
        setH2(1);
      }
    }

    // Check for third horizontal row SOS
    if (board[0][2] === 'S' && board[1][2] === 'O' && board[2][2] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && h3 === 0) {
      if (h3 === 0) {
        updateScore();
        setH3(1);
      }
    }

    // Check for diagonal SOS (top-left to bottom-right)
    if (board[0][0] === 'S' && board[1][1] === 'O' && board[2][2] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && d1 === 0) {
      if (d1 === 0) {
        updateScore();
        setD1(1);
      }
    }

    // Check for diagonal SOS (bottom-left to top-right)
    if (board[2][0] === 'S' && board[1][1] === 'O' && board[0][2] === 'S') {
      //sosCount++;
      // if (sosCount > 0 && d2 === 0) {
      if (d2 === 0) {
        updateScore();
        setD2(1);
      }
    }

    // Set the current player to the other player
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);

    // Checking, should be removed later
    // console.log(sosCount);
    // console.log('SOS Count:', sosCount);
  };

  // Update the score of the player who formed the SOS
  const updateScore = () => {
    if (currentPlayer === 1) {
      setPlayer1(player1 + 1);
    } else {
      setPlayer2(player2 + 1);
    }
  };

  // Check if the game is over and display the winner
  const handleGameOver = () => {
    if (
      board[0].every(cell => cell !== '') &&
      board[1].every(cell => cell !== '') &&
      board[2].every(cell => cell !== '')
    ) {
      setGameOver(true);
      determineWinner();
    }
  };

  const determineWinner = () => {
    if (gameOver) {
      if (player1 > player2) {
        alert('Player 1 wins!');
      } else if (player2 > player1) {
        alert('Player 2 wins!');
      } else {
        alert('It is a tie!');
      }
    }
  };

  // Handle the press event on the grid
  const handlePress = (i, j) => {
    // If the cell is empty, update the board
    if (board[i][j] === '') {
      let newBoard = [...board];
      newBoard[i][j] = letter;
      setBoard(newBoard);
      checkSOS(); // Check if the player has formed SOS
    }

    // If the cell is not empty, alert the player to pick a letter
    if (board[i][j] === '') {
      if (letter === '') {
        alert('Pick a letter first (S or O).');
        return;
      }
    }
  };

  // Checking, should be removed later
  console.log('h1=', h1, 'h2=', h2, 'h3=', h3);
  console.log('v1=', v1, 'v2=', v2, 'v3=', v3);
  console.log('d1=', d1, 'd2=', d2);
  console.log(player1);
  console.log(player2);

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

  // Handle the selection of the letter
  const handleLetterSelection = selectedLetter => {
    if (!gameOver) {
      setLetter(selectedLetter);
    }
  };

  // Every time the player1 score changes, the function inside the useEffect will run
  React.useEffect(() => {
    console.log('Player 1 Score:', player1);
    handleGameOver();
    setCurrentPlayer(1);
  }, [player1, gameOver]); // This will log the player1 score whenever it changes

  // Every time the player2 score changes, the function inside the useEffect will run
  React.useEffect(() => {
    console.log('Player 2 Score:', player2);
    handleGameOver();
    setCurrentPlayer(2);
  }, [player2, gameOver]); // This will log the player2 score whenever it changes

  return (
    <View>
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
        <View style={styles.controls}>
          <Text>Current Player: {currentPlayer}</Text>
          <Pressable onPress={handleReset}>
            <Image
              source={require('../../assets/GamePlayAssets/ResetButton.png')}
            />
          </Pressable>
          {/* <Button title="Reset" onPress={handleReset} /> */}
        </View>
        <View style={styles.score}>
          <View>
            <Text style={styles.scoreText}>{player1}</Text>
          </View>
          <View>
            <Text style={styles.scoreText}>{player2}</Text>
          </View>
        </View>
        <View style={styles.playerText}>
          <Text style={styles.text}>Player 1</Text>
          <Text style={styles.text}>Player 2</Text>
        </View>
        <View>
          {currentPlayer === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/Player1Icon.png')}
              style={[styles.player1, {width: 89, height: 130}]}
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
              style={[styles.player2, {width: 80, height: 122}]}
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
    right: 110,
  },
  player2: {
    position: 'absolute',
    bottom: -110,
    right: -170,
  },
  controls: {
    position: 'absolute',
    top: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    //borderWidth: 1,
    //borderColor: 'pink',
    margin: 4,
    //backgroundColor: '#1a5c03',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
