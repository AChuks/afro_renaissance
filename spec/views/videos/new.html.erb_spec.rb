require 'spec_helper'

describe "videos/new" do
  before(:each) do
    assign(:video, stub_model(Video,
      :url => "MyString",
      :mdata => "MyString",
      :img => "MyString"
    ).as_new_record)
  end

  it "renders new video form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", videos_path, "post" do
      assert_select "input#video_url[name=?]", "video[url]"
      assert_select "input#video_mdata[name=?]", "video[mdata]"
      assert_select "input#video_img[name=?]", "video[img]"
    end
  end
end
