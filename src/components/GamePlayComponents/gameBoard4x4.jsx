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
  const [player1, setPlayer1] = React.useState(0); //player1 score
  const [player2, setPlayer2] = React.useState(0); //player2 score
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);
  const [letter, setLetter] = React.useState('');
  const [board, setBoard] = React.useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]);

  // identifies which row or column where SOS is formed
  const [h1_1, setH1_1] = React.useState(0);
  const [h1_2, setH1_2] = React.useState(0);
  const [h2_1, setH2_1] = React.useState(0);
  const [h2_2, setH2_2] = React.useState(0);
  const [h3_1, setH3_1] = React.useState(0);
  const [h3_2, setH3_2] = React.useState(0);
  const [h4_1, setH4_1] = React.useState(0);
  const [h4_2, setH4_2] = React.useState(0);
  const [v1_1, setV1_1] = React.useState(0);
  const [v1_2, setV1_2] = React.useState(0);
  const [v2_1, setV2_1] = React.useState(0);
  const [v2_2, setV2_2] = React.useState(0);
  const [v3_1, setV3_1] = React.useState(0);
  const [v3_2, setV3_2] = React.useState(0);
  const [v4_1, setV4_1] = React.useState(0);
  const [v4_2, setV4_2] = React.useState(0);
  const [d1_1, setD1_1] = React.useState(0);
  const [d1_2, setD1_2] = React.useState(0);
  const [d1_3, setD1_3] = React.useState(0);
  const [d1_4, setD1_4] = React.useState(0);
  const [d2_1, setD2_1] = React.useState(0);
  const [d2_2, setD2_2] = React.useState(0);
  const [d2_3, setD2_3] = React.useState(0);
  const [d2_4, setD2_4] = React.useState(0);

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
        //alert('Pick a letter first (S or O).');
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
        v1_1 === 0,
      setV1_1,
    );
    checkAndUpdate(
      board[0][1] === 'S' &&
        board[0][2] === 'O' &&
        board[0][3] === 'S' &&
        v1_2 === 0,
      setV1_2,
    );
    checkAndUpdate(
      board[1][0] === 'S' &&
        board[1][1] === 'O' &&
        board[1][2] === 'S' &&
        v2_1 === 0,
      setV2_1,
    );
    checkAndUpdate(
      board[1][1] === 'S' &&
        board[1][2] === 'O' &&
        board[1][3] === 'S' &&
        v2_2 === 0,
      setV2_2,
    );
    checkAndUpdate(
      board[2][0] === 'S' &&
        board[2][1] === 'O' &&
        board[2][2] === 'S' &&
        v3_1 === 0,
      setV3_1,
    );
    checkAndUpdate(
      board[2][1] === 'S' &&
        board[2][2] === 'O' &&
        board[2][3] === 'S' &&
        v3_2 === 0,
      setV3_2,
    );
    checkAndUpdate(
      board[3][0] === 'S' &&
        board[3][1] === 'O' &&
        board[3][2] === 'S' &&
        v4_1 === 0,
      setV4_1,
    );
    checkAndUpdate(
      board[3][1] === 'S' &&
        board[3][2] === 'O' &&
        board[3][3] === 'S' &&
        v4_2 === 0,
      setV4_2,
    );

    // Checking for horizontal rows
    checkAndUpdate(
      board[0][0] === 'S' &&
        board[1][0] === 'O' &&
        board[2][0] === 'S' &&
        h1_1 === 0,
      setH1_1,
    );
    checkAndUpdate(
      board[1][0] === 'S' &&
        board[2][0] === 'O' &&
        board[3][0] === 'S' &&
        h1_2 === 0,
      setH1_2,
    );
    checkAndUpdate(
      board[0][1] === 'S' &&
        board[1][1] === 'O' &&
        board[2][1] === 'S' &&
        h2_1 === 0,
      setH2_1,
    );
    checkAndUpdate(
      board[1][1] === 'S' &&
        board[2][1] === 'O' &&
        board[3][1] === 'S' &&
        h2_2 === 0,
      setH2_2,
    );
    checkAndUpdate(
      board[0][2] === 'S' &&
        board[1][2] === 'O' &&
        board[2][2] === 'S' &&
        h3_1 === 0,
      setH3_1,
    );
    checkAndUpdate(
      board[1][2] === 'S' &&
        board[2][2] === 'O' &&
        board[3][2] === 'S' &&
        h3_2 === 0,
      setH3_2,
    );
    checkAndUpdate(
      board[0][3] === 'S' &&
        board[1][3] === 'O' &&
        board[2][3] === 'S' &&
        h4_1 === 0,
      setH4_1,
    );
    checkAndUpdate(
      board[1][3] === 'S' &&
        board[2][3] === 'O' &&
        board[3][3] === 'S' &&
        h4_2 === 0,
      setH4_2,
    );

    // Checking for diagonals
    checkAndUpdate(
      board[0][1] === 'S' &&
        board[1][2] === 'O' &&
        board[2][3] === 'S' &&
        d1_1 === 0,
      setD1_1,
    );

    checkAndUpdate(
      board[0][0] === 'S' &&
        board[1][1] === 'O' &&
        board[2][2] === 'S' &&
        d1_2 === 0,
      setD1_2,
    );

    checkAndUpdate(
      board[1][1] === 'S' &&
        board[2][2] === 'O' &&
        board[3][3] === 'S' &&
        d1_3 === 0,
      setD1_3,
    );

    checkAndUpdate(
      board[1][0] === 'S' &&
        board[2][1] === 'O' &&
        board[3][2] === 'S' &&
        d1_4 === 0,
      setD1_4,
    );

    checkAndUpdate(
      board[2][0] === 'S' &&
        board[1][1] === 'O' &&
        board[0][2] === 'S' &&
        d2_1 === 0,
      setD2_1,
    );

    checkAndUpdate(
      board[3][0] === 'S' &&
        board[2][1] === 'O' &&
        board[1][2] === 'S' &&
        d2_2 === 0,
      setD2_2,
    );

    checkAndUpdate(
      board[2][1] === 'S' &&
        board[1][2] === 'O' &&
        board[0][3] === 'S' &&
        d2_3 === 0,
      setD2_3,
    );

    checkAndUpdate(
      board[3][1] === 'S' &&
        board[2][2] === 'O' &&
        board[1][3] === 'S' &&
        d2_4 === 0,
      setD2_4,
    );

    if (sosCount === 0) {
      // Set the current player to the other player
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }

    // Checking log of SOS count, should be removed later
    //console.log('SOS Count:', sosCount);
  };

  // Update the score of the player who formed the SOS
  const updateScore = () => {
    //console.log('Update score SOS Count', sosCount);

    if (currentPlayer === 1) {
      setPlayer1(prevPlayer1 => prevPlayer1 + 1);
    } else {
      setPlayer2(prevPlayer2 => prevPlayer2 + 1);
    }

    //console.log('Player1: ' + player1 + ' Player2: ' + player2);
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
      setD1_1(0);
      setD1_2(0);
      setD1_3(0);
      setD1_4(0);
      setD2_1(0);
      setD2_2(0);
      setD2_3(0);
      setD2_4(0);
      setH1_1(0);
      setH1_2(0);
      setH2_1(0);
      setH2_2(0);
      setH3_1(0);
      setH3_2(0);
      setH4_1(0);
      setH4_2(0);
      setV1_1(0);
      setV1_2(0);
      setV2_1(0);
      setV2_2(0);
      setV3_1(0);
      setV3_2(0);
      setV4_1(0);
      setV4_2(0);
    }
  };

  // Check if the game is over and display the winner
  const handleGameOver = () => {
    if (
      board[0].every(cell => cell !== '') &&
      board[1].every(cell => cell !== '') &&
      board[2].every(cell => cell !== '') &&
      board[3].every(cell => cell !== '')
    ) {
      checkSOS();
      setGameOver(true);
      determineWinner();
    }
  };

  // Reset the game
  const handleReset = () => {
    setBoard([
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
    ]);
    setCurrentPlayer(1);
    setGameOver(false);
    setLetter('');
    setPlayer1(0);
    setPlayer2(0);
    setD1_1(0);
    setD1_2(0);
    setD1_3(0);
    setD1_4(0);
    setD2_1(0);
    setD2_2(0);
    setD2_3(0);
    setD2_4(0);
    setH1_1(0);
    setH1_2(0);
    setH2_1(0);
    setH2_2(0);
    setH3_1(0);
    setH3_2(0);
    setH4_1(0);
    setH4_2(0);
    setV1_1(0);
    setV1_2(0);
    setV2_1(0);
    setV2_2(0);
    setV3_1(0);
    setV3_2(0);
    setV4_1(0);
    setV4_2(0);
  };

  // Every time the board changes, the function inside the useEffect will run
  React.useEffect(() => {
    // console.log('Player 1 Score:', player1);
    // console.log('Player 2 Score:', player2);
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
        source={require('../../assets/GamePlayAssets/Board4x4.png')}
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

        {/* Alert the player to pick a letter */}
        <Pressable>
          {letter === '' ? (
            <View>
              <Image
                source={require('../../assets/GamePlayAssets/rightArrow.png')}
                style={{position: 'absolute', bottom: 390, left: 105}}
              />
              <Image
                source={require('../../assets/GamePlayAssets/leftArrow.png')}
                style={{position: 'absolute', bottom: 390, right: 100}}
              />

              <Image
                source={require('../../assets/GamePlayAssets/letterAlert.png')}
                style={{position: 'absolute', top: -380, right: -195}}
              />
            </View>
          ) : null}
        </Pressable>

        {/* Winner Alert PopUp */}
        <View>
          {gameOver ? (
            <View>
              <Image
                source={require('../../assets/AlertAssets/AlertBoard.png')}
                style={{position: 'absolute', top: -410, left: -180}}
              />
              {player2 === player1 ? (
                <Image
                  source={require('../../assets/AlertAssets/DrawText.png')}
                  style={{position: 'absolute', top: -330, left: -40}}
                />
              ) : player1 > player2 ? (
                <Image
                  source={require('../../assets/AlertAssets/Player1Text.png')}
                  style={{position: 'absolute', top: -350, left: -105}}
                />
              ) : (
                <Image
                  source={require('../../assets/AlertAssets/Player2Text.png')}
                  style={{position: 'absolute', top: -350, left: -105}}
                />
              )}
              <Pressable onPress={handleReset}>
                <Image
                  source={require('../../assets/AlertAssets/PlayAgainButton.png')}
                  style={{position: 'absolute', top: 400, left: 80}}
                />
              </Pressable>
              <Pressable onPress={() => nav.navigate('Home')}>
                <Image
                  source={require('../../assets/AlertAssets/ExitButton.png')}
                  style={{position: 'absolute', top: 500, left: 80}}
                />
              </Pressable>
            </View>
          ) : null}
        </View>

        {/* Line markers for SOS */}
        <View>
          {h1_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h1_1Marker}
            />
          ) : null}
          {h1_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h1_2Marker}
            />
          ) : null}
          {h2_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h2_1Marker}
            />
          ) : null}
          {h2_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h2_2Marker}
            />
          ) : null}
          {h3_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h3_1Marker}
            />
          ) : null}
          {h3_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h3_2Marker}
            />
          ) : null}
          {h4_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h4_1Marker}
            />
          ) : null}
          {h4_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.h4_2Marker}
            />
          ) : null}
          {v1_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v1_1Marker}
            />
          ) : null}
          {v1_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v1_2Marker}
            />
          ) : null}
          {v2_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v2_1Marker}
            />
          ) : null}
          {v2_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v2_2Marker}
            />
          ) : null}
          {v3_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v3_1Marker}
            />
          ) : null}
          {v3_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v3_2Marker}
            />
          ) : null}
          {v4_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v4_1Marker}
            />
          ) : null}
          {v4_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.v4_2Marker}
            />
          ) : null}
          {d1_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d1_1Marker}
            />
          ) : null}
          {d1_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d1_2Marker}
            />
          ) : null}
          {d1_3 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d1_3Marker}
            />
          ) : null}
          {d1_4 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d1_4Marker}
            />
          ) : null}
          {d2_1 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d2_1Marker}
            />
          ) : null}
          {d2_2 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d2_2Marker}
            />
          ) : null}
          {d2_3 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d2_3Marker}
            />
          ) : null}
          {d2_4 === 1 ? (
            <Image
              source={require('../../assets/GamePlayAssets/lineMarker.png')}
              style={styles.d2_4Marker}
            />
          ) : null}
        </View>

        {/* Score and player icons */}
        <View>
          <Image
            source={require('../../assets/GamePlayAssets/player1ScoreBoard.png')}
            style={{position: 'absolute', bottom: -125, right: 32}}
          />
          <Text style={styles.scoreP1}>{player1}</Text>
          <View>
            <Image
              source={require('../../assets/GamePlayAssets/player1ScoreBoard.png')}
              style={{position: 'absolute', bottom: -125, left: 39}}
            />
            <Text style={styles.scoreP2}>{player2}</Text>
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
  h1_1Marker: {
    position: 'absolute',
    bottom: 290,
    left: -145,
  },
  h1_2Marker: {
    position: 'absolute',
    bottom: 290,
    right: -145,
  },
  h2_1Marker: {
    position: 'absolute',
    bottom: 225,
    left: -145,
  },
  h2_2Marker: {
    position: 'absolute',
    bottom: 225,
    right: -145,
  },
  h3_1Marker: {
    position: 'absolute',
    bottom: 160,
    left: -145,
  },
  h3_2Marker: {
    position: 'absolute',
    bottom: 160,
    right: -145,
  },
  h4_1Marker: {
    position: 'absolute',
    bottom: 95,
    left: -145,
  },
  h4_2Marker: {
    position: 'absolute',
    bottom: 95,
    right: -145,
  },
  v1_1Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    top: -230,
    right: -10,
  },
  v1_2Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    bottom: 160,
    left: -215,
  },
  v2_1Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    top: -230,
    right: -75,
  },
  v2_2Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    bottom: 160,
    left: -145,
  },
  v3_1Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    top: -230,
    right: -140,
  },
  v3_2Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    bottom: 160,
    left: -80,
  },
  v4_1Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    top: -230,
    right: -210,
  },
  v4_2Marker: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    bottom: 160,
    left: -15,
  },
  d1_1Marker: {
    position: 'absolute',
    bottom: 160,
    right: -80,
    transform: [{rotate: '45deg'}],
  },
  d1_2Marker: {
    position: 'absolute',
    bottom: 230,
    right: -70,
    transform: [{rotate: '45deg'}],
  },
  d1_3Marker: {
    position: 'absolute',
    bottom: 150,
    right: -155,
    transform: [{rotate: '45deg'}],
  },
  d1_4Marker: {
    position: 'absolute',
    bottom: 230,
    right: -145,
    transform: [{rotate: '45deg'}],
  },

  d2_1Marker: {
    position: 'absolute',
    bottom: 220,
    right: -70,
    transform: [{rotate: '135deg'}],
  },
  d2_2Marker: {
    position: 'absolute',
    bottom: 225,
    right: -140,
    transform: [{rotate: '135deg'}],
  },
  d2_3Marker: {
    position: 'absolute',
    bottom: 155,
    right: -70,
    transform: [{rotate: '135deg'}],
  },
  d2_4Marker: {
    position: 'absolute',
    bottom: 160,
    right: -140,
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

  scoreP1: {
    position: 'absolute',
    bottom: -80,
    right: 55,
    fontSize: 40,
    fontFamily: 'Eraser',
    color: '#FFFFFF',
  },
  scoreP2: {
    position: 'absolute',
    bottom: -80,
    right: -90,
    fontSize: 40,
    fontFamily: 'Eraser',
    color: '#FFFFFF',
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
    width: 35,
    height: 35,
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
    width: 58,
    height: 58,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
