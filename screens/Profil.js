import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
// Import Auth
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';


// LANGT TIL FERDIG AMIGO