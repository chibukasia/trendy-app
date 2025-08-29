import { TouchableOpacity, View } from "react-native";
import InputWithIcon from "../../Atoms/Inputs/InputWithIcon";
import IconButton from "../../Atoms/Buttons/IconButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface IProps {
  setIsVisible?: (isVisible: boolean) => void;
  filterVisible?: boolean;
  searchVisible?: boolean;
  setSearch?: (search: string) => void;
}
const SearchAndFilter = (props: IProps) => {
  const { setIsVisible, searchVisible, filterVisible, setSearch } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const onFilterTap = () => {
    setIsVisible && setIsVisible(true);
  };
  return (
    <View style={styles.container} testID="search-filter">
      {searchVisible && (
        <View style={{ width: !filterVisible ? "100%" : 300 }}>
          <InputWithIcon
            name="search"
            onChangeText={setSearch}
            placeholder="Search"
          />
        </View>
      )}
      {filterVisible && (
        <TouchableOpacity onPress={onFilterTap} testID="filter-icon">
          <View style={{padding: 8, borderRadius: 8}}>
            <Ionicons
              name="filter-outline"
              color={theme.colors.text}
              size={30}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchAndFilter;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));