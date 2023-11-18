import React, {useCallback, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {useFeedsStore} from '../stores/useFeedsStore';

function PostDetailScreen() {
  const navigation = useNavigation();
  const [showMore, setShowMore] = React.useState(true);
  const {feeds, upvote, downvote, addComment} = useFeedsStore(state => state);

  const route = useRoute();
  const id = route?.params.id || 0;
  const feedDetail = feeds[id];

  const [commentText, setCommentText] = useState('');

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
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginBottom: 48}}>
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
                uri: feedDetail?.image,
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                {feedDetail?.name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                {feedDetail?.date}
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
                {feedDetail?.post}
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
                {feedDetail?.comments?.length || 0}
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
                  downvote(feedDetail?.id);
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
                {feedDetail?.vote}
              </Text>
              <Pressable
                onPress={() => {
                  upvote(feedDetail?.id);
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
        <FlatList
          data={feedDetail?.comments}
          renderItem={({item}) => {
            return (
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
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 19.36,
                    }}>
                    {item}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
      </View>
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
        <TextInput
          placeholder="Enter Comment"
          value={commentText}
          style={{flex: 1}}
          onChangeText={text => setCommentText(text)}
        />
        <Button
          title="Comment"
          onPress={() => {
            addComment(feedDetail?.id, commentText);
            setCommentText('');
          }}
          disabled={commentText.length <= 0}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
