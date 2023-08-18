import { Switch, makeStyles, useTheme } from "@rneui/themed";
import { View, Text } from "react-native";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import { useState } from "react";

interface IProps {
  filters: string[]
  onDonePress: ()=>void;
  rounded?: boolean;
}
const FilterCard = (props: IProps) => {
  const styles = useStyles(props);
  const {onDonePress, filters} = props;
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const {theme} = useTheme()
  const handleFilterToggle = (filterItem: string)=>{
    if(activeFilters.includes(filterItem)){
      setActiveFilters(activeFilters.filter((item)=>item===filterItem))
    }else{
      setActiveFilters([...activeFilters, filterItem])
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerStyles}>
        <Text style={[styles.textStyles, { fontSize: 20 }]}>Filter By</Text>
        <Text
          style={[
            styles.textStyles,
            { textDecorationLine: "underline", fontSize: 16 },
          ]}
          onPress={()=>setActiveFilters([])}
        >
          Reset
        </Text>
      </View>
      <View style={styles.filterStyles}>
        {filters.map((item, index)=>(
        <View style={styles.containterStyles} key={index}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textStyles}>{item}</Text>
          </View>
          <View>
            <Switch 
              color={theme.colors.primary} 
              value={activeFilters.includes(item)} 
              onValueChange={() => handleFilterToggle(item)} 
              trackColor={{false: '#d4d4d4', true: theme.colors.primary}}
            />
          </View>
      </View>
        ))}       
      </View>
      <ActionButton onPress={onDonePress} children={"Done"} fullWidth />
    </View>
  );
};

export default FilterCard;

const useStyles = makeStyles((theme, props:IProps) => ({
  container: {
    width: "100%",
    backgroundColor: theme.colors.background,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: props.rounded? 20: 0,
    borderBottomEndRadius: props.rounded? 20: 0,
    padding: 15,
    paddingBottom: 20,
  },
  headerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 7,
    borderBottomColor: "#49505740",
  },
  filterStyles: {
    paddingBottom: 15,
  },
  textStyles: {
    fontWeight: "700",
    color: theme.colors.text
  },
  containterStyles: {
    borderColor: theme.colors.stroke,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
}));
