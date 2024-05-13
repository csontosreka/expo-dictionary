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
            {
              result.connections.map((connection: any) => (
                <YStack>
                  {
                    connection.connected.connections.map((connection: any) => (
                      <YStack>
                        {
                          connection.name === 'expression' && (
                            <>
                              <Text>{connection.connected.content}</Text>
                              <Text>{connection.connected.connections[0].connected.connections[0].connected.content}</Text>
                            </> 
                          )
                        }
                        {
                          connection.name === 'translation' && (
                            <>
                              <Text>{connection.connected.content}</Text>
                            </> 
                          )
                        }
                      </YStack>

                    ))
                  }
                </YStack>
              ))
            }
          </XStack>
        ))
      }
    </YStack>
    </ScrollView>
  )
}

export default SearchResults