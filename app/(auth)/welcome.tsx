import { Icon } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import { ScrollView, Text, View } from "react-native";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import Logo from "../../components/Atoms/Brand/Logo";
import { useAppDispatch } from "../../store";
import { updateLoginState } from "../../store/slices/authSlice";
import {router} from 'expo-router'
import React from "react";

const welcomeInfo = [
  {
    icon: "book-open",
    description: "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum",
    iconType: "feather",
  },
  {
    icon: "lock-outline",
    description: "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum",
    iconType: "material-icons",
  },
  {
    icon: "notifications-none",
    description: "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum",
    iconType: "material-icons",
  },
  {
    icon: "setting",
    description: "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum ",
    iconType: "ant-design",
  },
];
const Welcome = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const dispatch = useAppDispatch()
  const handleContinue = async () => {
    dispatch(updateLoginState())
    router.replace('/(tabs)')
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
        <Logo width={70} height={70} />
      </View>
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.textStyles,
            { fontSize: 20, fontWeight: "700", textAlign: "center" },
          ]}
        >
          Welcome To Trendy!
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.textStyles}>
            Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed
            dignissim, Lorem ipsum consectetur est a, mattis tellus. Sed dignissim, Lorem ipsum
          </Text>
        </View>
        <View style={styles.listContainer}>
          {welcomeInfo.map((item, index) => (
            <View style={styles.listItem} key={index}>
              <View>
                <Icon
                  name={item.icon}
                  type={item.iconType}
                  size={30}
                  color={theme.colors.text}
                />
              </View>
              <View style={styles.descriptionView}>
                <Text style={styles.textStyles}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.buttons}>
        <ActionButton fullWidth children={"Continue"} onPress={handleContinue} />
      </View>
    </ScrollView>
  );
};

export default Welcome;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.colors.background
  },
  textStyles: {
    color: theme.colors.text,
    fontSize: 17,
    textAlign: 'justify'
  },
  headerContainer: {
    paddingVertical: 20,
  },
  contentContainer: {
    gap: 10
  },
  listContainer: {
    gap: 10
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 15,
  },
  buttons:{
    paddingTop: 40
  },
  descriptionView: { 
    paddingHorizontal: 10, 
    width: '90%'
  }
}));
