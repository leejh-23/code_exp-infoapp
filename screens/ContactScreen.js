import { View, ScrollView } from "react-native";
import { List, Avatar } from "react-native-paper";
import contactsData from "../data.js";

// scroll view has two parameters, style and contentcontainerstyle
const ContactScreen = () => (
  <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
    <View>
      {/* loops through the contactsData array and for each contact, return a list item containing the person's details */}
      {/* current item is contact, index is just the index num we r currently at */}
      {/* notice that there is a curly brace before the map function bc we are switching back to js */}

      {contactsData.map((contact, idx) => (
        <List.Item
          key={contact.name + idx} {/* keys must be unique */}
          title={contact.name}
          description={`${contact.title}, ${contact.company}`}
          left={() => (
            <Avatar.Image
              size={48}
              source={{ uri: contact.pic }}
              style={{ marginTop: 8, marginLeft: 8 }}
            />
          )}
          titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          descriptionStyle={{ color: "#b0b0b0", fontSize: 15 }}
          style={{
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#eee"
          }}
        />
      ))}
    </View>
  </ScrollView>
);

export default ContactScreen;