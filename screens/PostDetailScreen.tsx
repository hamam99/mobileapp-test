import React, {useCallback} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';

function PostDetailScreen() {
  const navigation = useNavigation();
  const [showMore, setShowMore] = React.useState(true);

  const onTextLayout = useCallback(
    e => {
      if (showMore === false) {
        return;
      }
      const numberOfLine = e.nativeEvent.lines.length;
      const isNeedShowMore = numberOfLine >= 3;
      setShowMore(isNeedShowMore);
    },
    [showMore],
  );

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                Usup Suparma
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                Mar 27, 2023
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <View style={{margin: 24}}>
              <Text
                style={{}}
                numberOfLines={showMore ? 3 : 0}
                onTextLayout={onTextLayout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
                consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
                Integer et nunc ut tellus tinci, consectetur adipiscing elit.
                Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci
                Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus
                tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac
                dictum.
              </Text>
              {showMore && (
                <TouchableOpacity onPress={() => setShowMore(false)}>
                  <Text style={{color: 'blue'}}>More</Text>
                </TouchableOpacity>
              )}
            </View>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              height={200}
            />
          </View>
          <View
            style={{
              height: 52,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={IconShare}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Image
                source={IconComment}
                height={18}
                width={18}
                style={{marginLeft: 24}}
              />
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 4,
                  textAlign: 'center',
                }}>
                0
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Pressable onPress={() => console.log('downvote')}>
                <Image
                  source={IconDownvoteInactive}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                0
              </Text>
              <Pressable onPress={() => console.log('upvote')}>
                <Image
                  source={IconUpvoteInactive}
                  height={18}
                  width={18}
                  style={{marginRight: 22}}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View
          style={{
            flexDirection: 'row',
            minHeight: 72,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={36}
            height={36}
            style={{borderRadius: 24, marginRight: 16}}
          />
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 14.52,
                color: '#828282',
              }}>
              Usup Suparma
            </Text>
            <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput placeholder="Enter Comment" style={{flex: 1}} />
        <Button title="Comment" onPress={() => console.log('comment')} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
