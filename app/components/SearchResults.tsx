import { View, Text } from 'react-native'
import React from 'react'
import { Paragraph, ScrollView, XStack, YStack } from 'tamagui'

interface SearchResultsProps {
  results: any[]
}

const SearchResults = (props: SearchResultsProps) => {

  return (
    <ScrollView>
      <YStack>
        {
          props.results.map((result, index) => (
            <XStack key={index} space='$10'>
              <Text>{result.content}</Text>
              <YStack>
                {
                  result.connections.map((connection: any) => (
                    <>
                      {
                        connection.connected.connections.map((connection: any) => (
                          <>
                            {
                              connection.name === 'expression' && (
                                <XStack space='$10'>
                                  <Text>{connection.connected.content}</Text>
                                  <Text>{connection.connected.connections[0].connected.connections[0].connected.content}</Text>
                                </XStack>
                              )
                            }
                            {
                              connection.name === 'translation' && (
                                <>
                                  <Text>{connection.connected.content}</Text>
                                </>
                              )
                            }
                          </>

                        ))
                      }
                    </>
                  ))
                }
              </YStack>
            </XStack>
          ))
        }
      </YStack>
    </ScrollView>
  )
}

export default SearchResults