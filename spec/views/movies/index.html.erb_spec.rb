require 'spec_helper'

describe "movies/index" do
  before(:each) do
    assign(:movies, [
      stub_model(Movie,
        :url => "Url",
        :mdata => "",
        :img => "Img"
      ),
      stub_model(Movie,
        :url => "Url",
        :mdata => "",
        :img => "Img"
      )
    ])
  end

  it "renders a list of movies" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Url".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Img".to_s, :count => 2
  end
end