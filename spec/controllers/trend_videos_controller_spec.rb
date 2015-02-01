require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe TrendVideosController do

  # This should return the minimal set of attributes required to create a valid
  # TrendVideo. As you add validations to TrendVideo, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) { { "url" => "MyString" } }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # TrendVideosController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all trend_videos as @trend_videos" do
      trend_video = TrendVideo.create! valid_attributes
      get :index, {}, valid_session
      assigns(:trend_videos).should eq([trend_video])
    end
  end

  describe "GET show" do
    it "assigns the requested trend_video as @trend_video" do
      trend_video = TrendVideo.create! valid_attributes
      get :show, {:id => trend_video.to_param}, valid_session
      assigns(:trend_video).should eq(trend_video)
    end
  end

  describe "GET new" do
    it "assigns a new trend_video as @trend_video" do
      get :new, {}, valid_session
      assigns(:trend_video).should be_a_new(TrendVideo)
    end
  end

  describe "GET edit" do
    it "assigns the requested trend_video as @trend_video" do
      trend_video = TrendVideo.create! valid_attributes
      get :edit, {:id => trend_video.to_param}, valid_session
      assigns(:trend_video).should eq(trend_video)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new TrendVideo" do
        expect {
          post :create, {:trend_video => valid_attributes}, valid_session
        }.to change(TrendVideo, :count).by(1)
      end

      it "assigns a newly created trend_video as @trend_video" do
        post :create, {:trend_video => valid_attributes}, valid_session
        assigns(:trend_video).should be_a(TrendVideo)
        assigns(:trend_video).should be_persisted
      end

      it "redirects to the created trend_video" do
        post :create, {:trend_video => valid_attributes}, valid_session
        response.should redirect_to(TrendVideo.last)
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved trend_video as @trend_video" do
        # Trigger the behavior that occurs when invalid params are submitted
        TrendVideo.any_instance.stub(:save).and_return(false)
        post :create, {:trend_video => { "url" => "invalid value" }}, valid_session
        assigns(:trend_video).should be_a_new(TrendVideo)
      end

      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        TrendVideo.any_instance.stub(:save).and_return(false)
        post :create, {:trend_video => { "url" => "invalid value" }}, valid_session
        response.should render_template("new")
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested trend_video" do
        trend_video = TrendVideo.create! valid_attributes
        # Assuming there are no other trend_videos in the database, this
        # specifies that the TrendVideo created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        TrendVideo.any_instance.should_receive(:update).with({ "url" => "MyString" })
        put :update, {:id => trend_video.to_param, :trend_video => { "url" => "MyString" }}, valid_session
      end

      it "assigns the requested trend_video as @trend_video" do
        trend_video = TrendVideo.create! valid_attributes
        put :update, {:id => trend_video.to_param, :trend_video => valid_attributes}, valid_session
        assigns(:trend_video).should eq(trend_video)
      end

      it "redirects to the trend_video" do
        trend_video = TrendVideo.create! valid_attributes
        put :update, {:id => trend_video.to_param, :trend_video => valid_attributes}, valid_session
        response.should redirect_to(trend_video)
      end
    end

    describe "with invalid params" do
      it "assigns the trend_video as @trend_video" do
        trend_video = TrendVideo.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        TrendVideo.any_instance.stub(:save).and_return(false)
        put :update, {:id => trend_video.to_param, :trend_video => { "url" => "invalid value" }}, valid_session
        assigns(:trend_video).should eq(trend_video)
      end

      it "re-renders the 'edit' template" do
        trend_video = TrendVideo.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        TrendVideo.any_instance.stub(:save).and_return(false)
        put :update, {:id => trend_video.to_param, :trend_video => { "url" => "invalid value" }}, valid_session
        response.should render_template("edit")
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested trend_video" do
      trend_video = TrendVideo.create! valid_attributes
      expect {
        delete :destroy, {:id => trend_video.to_param}, valid_session
      }.to change(TrendVideo, :count).by(-1)
    end

    it "redirects to the trend_videos list" do
      trend_video = TrendVideo.create! valid_attributes
      delete :destroy, {:id => trend_video.to_param}, valid_session
      response.should redirect_to(trend_videos_url)
    end
  end

end