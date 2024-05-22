import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Card, XStack, YStack, Text, useTheme } from 'tamagui'

interface SearchResultsProps {
  results: any[]
}

const SearchResults = (props: SearchResultsProps) => {
  const theme = useTheme()

  return (
    <ScrollView contentContainerStyle={styles.verticalScrollViewContent} style={styles.verticalScrollView}>
      <ScrollView horizontal contentContainerStyle={styles.horizontalScrollViewContent} style={styles.horizontalScrollView}>
        <Card
          maxWidth={1000}
          marginHorizontal='$5'
          padding='$5'
          marginBottom={30}
          backgroundColor={theme.color6.get()}
        >
          <YStack >
            {
              props.results.map((result, index) => (
                <XStack key={index} space='$10' marginBottom={30}>
                  <YStack width="10%">
                    <Text fontWeight='bold' >{result.content}</Text>
                  </YStack>
                  <YStack width="80%">
                    {
                      result.connections.map((connection: any) => (
                        <React.Fragment key={connection.id}>
                          {
                            connection.connected.connections.map((subConnection: any) => (
                              <React.Fragment key={subConnection.id}>
                                {
                                  subConnection.name === 'expression' && (
                                    <XStack marginBottom={5} borderRadius={10} padding='$1' paddingHorizontal='$3' space='$5' backgroundColor={theme.color3.get()}>
                                      <Text width='50%'>{subConnection.connected.content}</Text>
                                      <Text width='50%'>{subConnection.connected.connections[0].connected.connections[0].connected.content}</Text>
                                    </XStack>
                                  )
                                }
                                {
                                  subConnection.name === 'translation' && (
                                    <XStack space='$5' padding='$1' paddingHorizontal='$3' borderBottomColor={theme.color1.get()} borderBottomWidth='$0.25'>
                                      <Text>{subConnection.connected.content}</Text>
                                    </XStack>
                                  )
                                }
                              </React.Fragment>
                            ))
                          }
                        </React.Fragment>
                      ))
                    }
                  </YStack>
                </XStack>
              ))
            }
          </YStack>
        </Card>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  verticalScrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  verticalScrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  horizontalScrollView: {
    flex: 1,
  },
  horizontalScrollViewContent: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});

export default SearchResults;