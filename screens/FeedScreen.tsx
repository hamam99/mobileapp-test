/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {useFeedsStore} from '../stores/useFeedsStore';
import {IFeedsType} from '../stores/types';

function FeedScreen() {
  const navigation = useNavigation();
  const {feeds, upvote, downvote} = useFeedsStore(state => state);

  const RenderItem = ({item}: {item: IFeedsType}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('post-detail', {
            id: item?.id,
          })
        }>
        <View style={{}}>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: item?.profile,
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                {item.name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                {item?.date}
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <Text style={{margin: 24}} numberOfLines={3}>
              {item?.post}
            </Text>
            <Image
              source={{
                uri: item?.image,
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
                {item?.comments?.length || 0}
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
              <Pressable
                onPress={() => {
                  console.log('downVote');
                  downvote(item?.id);
                }}>
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
                {item?.vote || 0}
              </Text>
              <Pressable
                onPress={() => {
                  upvote(item?.id);
                  console.log('upvote');
                }}>
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
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={feeds}
        renderItem={RenderItem}
        // keyExtractor={item => item?.id?.toString()}
      />
    </SafeAreaView>
  );
}

export default FeedScreen;
