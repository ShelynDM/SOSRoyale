/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import OButton from './O-button';
import SButton from './S-button';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    Dimensions,
    TextBase,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const App = () => {
    const [active_player, setActive_player] = useState('S');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [addpoint, setaddpoint] = useState(0);
    const [markers, setMarkers] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);
    const [winninglines, setwinninglines] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);

    const markPosition = position => {
        if (!markers[position]) {
            let temp = [...markers];
            temp[position] = active_player;
            setMarkers(temp);
            calculateWinner(markers);
        }
    };

    const resetMarkers = () => {
        setMarkers([null, null, null, null, null, null, null, null, null]);
        setActive_player('S');
        setPlayer1Score(0);
        setPlayer2Score(0);
    };

    const updateScore = () => {
        if (active_player === 'S') {
            setPlayer1Score(prevScore => prevScore + 1);
            alert('Player 1 +1 point');
        } else {
            setPlayer2Score(prevScore => prevScore + 1);
            alert('Player 2 +1 point');
        }
    }


    const calculateWinner = (squares) => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            //check if line is marked as win from previous turn
            if (winninglines[i] !== 'win') {
                //checks if SOS is formed
                if (squares[a] === 'S' &&
                    squares[b] === 'O' &&
                    squares[c] === 'S') {

                    updateScore();
                    setaddpoint(1);

                    //Updates the array that monitors the winning lines
                    let temp = [...winninglines];
                    temp[i] = 'win';
                    setwinninglines(temp);
                }
            }


        }
        //transfer chances to next player if player did not point
        if (addpoint === 0) {
            if (active_player === 'S') {
                setActive_player('O');
            } else {
                setActive_player('S');
            }
        }

        //reset addpoint usestate
        setaddpoint(0);
        return null;
    };

    useEffect(() => {
        setActive_player(active_player);
    }, [player1Score]);


    useEffect(() => {
        setActive_player(active_player);
    }, [player2Score]);

    return (
        <SafeAreaView style={styles.body}>
            <View
                style={[
                    styles.playerInfo,
                    { backgroundColor: active_player === 'S' ? '#007FF4' : '#F40075' },
                ]}>
                {active_player === 'S' && <Text style={styles.playerTxt}>Player 1's turn</Text>}
                {active_player === 'O' && <Text style={styles.playerTxt}>Player 2's turn</Text>}

            </View>
            <View style={styles.mainContainer}>
                {/* Top Left Cell */}
                <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
                    {markers[0] === 'S' && (
                        <SButton />
                    )}
                    {markers[0] === 'O' && (
                        <OButton />
                    )}

                </Pressable>

                {/* Top Mid Cell */}
                <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
                    {markers[1] === 'S' && (
                        <SButton />
                    )}
                    {markers[1] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Top Right Cell */}
                <Pressable
                    style={styles.cell_top_right}
                    onPress={() => markPosition(2)}>
                    {markers[2] === 'S' && (
                        <SButton />
                    )}
                    {markers[2] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Mid Left Cell */}
                <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
                    {markers[3] === 'S' && (
                        <SButton />
                    )}
                    {markers[3] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Mid Mid Cell */}
                <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
                    {markers[4] === 'S' && (
                        <SButton />
                    )}
                    {markers[4] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Mid Right Cell */}
                <Pressable
                    style={styles.cell_mid_right}
                    onPress={() => markPosition(5)}>
                    {markers[5] === 'S' && (
                        <SButton />
                    )}
                    {markers[5] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Bottom Left Cell */}
                <Pressable
                    style={styles.cell_bottom_left}
                    onPress={() => markPosition(6)}>
                    {markers[6] === 'S' && (
                        <SButton />
                    )}
                    {markers[6] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Bottom Mid Cell */}
                <Pressable
                    style={styles.cell_bottom_mid}
                    onPress={() => markPosition(7)}>
                    {markers[7] === 'S' && (
                        <SButton />
                    )}
                    {markers[7] === 'O' && (
                        <OButton />
                    )}
                </Pressable>

                {/* Bottom Right Cell */}
                <Pressable
                    style={styles.cell_bottom_right}
                    onPress={() => markPosition(8)}>
                    {markers[8] === 'S' && (
                        <SButton />
                    )}
                    {markers[8] === 'O' && (
                        <OButton />
                    )}
                </Pressable>
            </View>
            <Pressable style={styles.cancelBTN} onPress={resetMarkers}>
                <Text>Reset</Text>
            </Pressable>
            <Text>Player 1: {player1Score}</Text>
            <Text>Player 2: {player2Score}</Text>
            <Text>Markers: {markers}</Text>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    playerInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,
    },
    playerTxt: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1.2,
        color: '#fff',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 60,
    },
    cell_top_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6,
    },
    cell_top_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
    },
    cell_top_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
        borderLeftWidth: 6,
    },
    cell_mid_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
    },
    cell_mid_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell_mid_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
    },
    cell_bottom_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderTopWidth: 6,
    },
    cell_bottom_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 6,
    },
    cell_bottom_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
        borderTopWidth: 6,
    },
    icon: {
        height: 62,
        width: 62,
    },
    cancelBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    cancelIcon: {
        height: 80,
        width: 80,
    },
});
